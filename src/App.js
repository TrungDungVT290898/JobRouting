import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { Pagination } from "@mui/material";
import JobTags from "./components/JobTags";
import { useEffect, useRef, useState } from "react";
import jobs from "./data";
import LoginModal from "./components/LoginModal";
import { OpenLoginModalContext } from "./contexts/Export";
import DetailModal from "./components/DetailModal";
import { Routes, Route, useNavigate } from "react-router-dom";
const defaultValue = {
  username: "nguyentrungdung12a@gmail.com",
  password: "123",
  remember: true,
};

function App() {
  const navigate = useNavigate();
  const isRequestOpenDetail = useRef(false);
  const [userInfo, setUserInfo] = useState({
    username: "nguyentrungdung12a@gmail.com",
    password: "123",
    remember: true,
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenLoginModal, SetIsOpenLoginModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(jobs[0]);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [allJob, setAllJob] = useState([...jobs]);
  const [listJob, setListJobs] = useState(allJob.slice(0, 5));
  const handleLoginClick = () => {
    if (isLogin) {
      setIsLogin(false);
      navigate("/");
    } else {
      SetIsOpenLoginModal(true);
      navigate("/login");
    }
  };
  const handleLoginModalClose = () => {
    SetIsOpenLoginModal(false);
    navigate("/");
  };
  const handleDetailModalClose = () => {
    setIsOpenDetailModal(false);
  };
  const handleShowDetailJob = (job) => {
    console.log(job);
    if (!isLogin) {
      SetIsOpenLoginModal(true);
      isRequestOpenDetail.current = true;
    } else {
      setIsOpenDetailModal(true);
    }
    setCurrentJob(job);
  };
  const onSubmitKeyword = (data) => {
    console.log(data);
    if (!data || !data.searchKeyword || data.searchKeyword === "") {
      setAllJob([...jobs]);
    } else
      setAllJob(
        jobs.filter(
          (s) =>
            s.skills.filter(
              (k) => k.toLowerCase() === data.searchKeyword.toLowerCase()
            ).length >= 1
        )
      );
  };
  const handleLoginSubmit = (data) => {
    console.log(data);
    if (!data.username) {
      data.username = defaultValue.username;
    }
    if (!data.password) {
      data.password = defaultValue.password;
    }
    if (!data.remember) {
      data.remember = defaultValue.remember;
    }
    SetIsOpenLoginModal(false);
    setIsLogin(true);
    setUserInfo(data);
    navigate("/");
  };

  const handleChangePage = (e, page) => {
    setListJobs(allJob.slice((page - 1) * 5, (page - 1) * 5 + 5));
  };

  useEffect(() => {
    if (isRequestOpenDetail.current && isLogin) {
      setIsOpenDetailModal(true);
      isRequestOpenDetail.current = false;
    }
  }, [isLogin]);
  useEffect(() => {
    setListJobs(allJob.slice(0, 5));
    console.log(allJob);
  }, [allJob]);
  return (
    <OpenLoginModalContext.Provider
      value={{
        isOpen: isOpenLoginModal,
        isLogin: isLogin,
        handleLoginClick: handleLoginClick,
        handleLoginSubmit,
        userInfo,
        handleShowDetailJob,
        currentJob,
        isOpenDetailModal,
        handleLoginModalClose,
        handleDetailModalClose,
        onSubmitKeyword,
        defaultValue,
      }}
    >
      <div className="App">
        <SearchAppBar />
        <JobTags jobs={listJob} />
        {allJob.length <= 5 ? (
          ""
        ) : (
          <Pagination
            className="pagination"
            count={Number.parseInt(allJob.length / 5)}
            onChange={(e, page) => handleChangePage(e, page)}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        )}
      </div>

      <Routes>
        <Route path="/login" element={<LoginModal />} />
      </Routes>

      <DetailModal />
    </OpenLoginModalContext.Provider>
  );
}

export default App;
