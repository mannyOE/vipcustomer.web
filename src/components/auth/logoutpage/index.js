/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout_a } from "store/actions/authActions";
import { AuthStore } from "store/contexts/AuthContext";
import "./logout.css";

const LogoutPage = (props) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const { dispatch } = AuthStore();

  const logout = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
    setLogoutSuccess((status) => !status);
    logout_a(dispatch);
    navigate("/");
  };

  return (
    <div>
      <Modal
        className="modal-design"
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        {logoutSuccess ? (
          <div className="modal-box-success">
            <div className="modal-header-success">
              <span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.375 11.375H9.625V6.125H11.375V11.375ZM9.625 13.125H11.375V14.875H9.625V13.125ZM13.7638 2.625H7.23625L2.625 7.23625V13.7638L7.23625 18.375H13.7638L18.375 13.7638V7.23625L13.7638 2.625Z"
                    fill="#68D388"
                  />
                </svg>
              </span>
              <p>Success</p>
              <span className="cancel-success" onClick={props.onHide}>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.3952 5.24538L13.7228 1.5857C13.2928 1.15725 12.4338 0.801082 11.8257 0.802143L6.63959 0.81119C6.03156 0.812251 5.17378 1.17141 4.74533 1.60136L1.08565 5.27384C0.657199 5.70378 0.30103 6.56281 0.302091 7.17084L0.311138 12.357C0.312199 12.965 0.671363 13.8228 1.10131 14.2513L4.77378 17.9109C5.20373 18.3394 6.06275 18.6956 6.67079 18.6945L11.8569 18.6854C12.465 18.6844 13.3228 18.3252 13.7512 17.8953L17.4109 14.2228C17.8393 13.7929 18.1955 12.9338 18.1944 12.3258L18.1854 7.13964C18.1843 6.53161 17.8252 5.67383 17.3952 5.24538ZM12.8564 12.3977C13.1161 12.6566 13.1169 13.0858 12.858 13.3455C12.7241 13.4799 12.5544 13.5428 12.3845 13.5431C12.2146 13.5434 12.0446 13.4811 11.9102 13.3472L9.24992 10.6961L6.59888 13.3564C6.46499 13.4908 6.29521 13.5537 6.12532 13.554C5.95543 13.5543 5.78543 13.492 5.65107 13.3581C5.39131 13.0992 5.39056 12.67 5.64941 12.4103L8.30045 9.74997L5.64015 7.09893C5.38039 6.84008 5.37964 6.41088 5.63849 6.15112C5.89735 5.89136 6.32655 5.89061 6.58631 6.14947L9.24661 8.8005L11.8977 6.1402C12.1565 5.88044 12.5857 5.87969 12.8455 6.13855C13.1052 6.3974 13.106 6.8266 12.8471 7.08636L10.1961 9.74667L12.8564 12.3977Z"
                    fill="#121212"
                  />
                </svg>
              </span>
            </div>
            <p>Logged out successfully</p>
          </div>
        ) : (
          <div className="modal-box">
            <Modal.Header closeButton>
              <Modal.Title
                className="modal-title"
                id="contained-modal-title-vcenter">
                Are you sure you want to log out?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              {isActive ? (
                <svg
                  className="laptop-view"
                  width="91"
                  height="90"
                  viewBox="0 0 91 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2540_7791)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 72C52.3869 72 54.6761 72.9482 56.364 74.636C58.0518 76.3239 59 78.6131 59 81C59 83.3869 58.0518 85.6761 56.364 87.364C54.6761 89.0518 52.3869 90 50 90C47.6131 90 45.3239 89.0518 43.636 87.364C41.9482 85.6761 41 83.3869 41 81C41 78.6131 41.9482 76.3239 43.636 74.636C45.3239 72.9482 47.6131 72 50 72ZM21.8345 58.5C24.8182 58.5 27.6797 59.6853 29.7895 61.795C31.8992 63.9048 33.0845 66.7663 33.0845 69.75C33.0845 72.7337 31.8992 75.5952 29.7895 77.7049C27.6797 79.8147 24.8182 81 21.8345 81C18.8508 81 15.9893 79.8147 13.8795 77.7049C11.7698 75.5952 10.5845 72.7337 10.5845 69.75C10.5845 66.7663 11.7698 63.9048 13.8795 61.795C15.9893 59.6853 18.8508 58.5 21.8345 58.5ZM73.9355 60.75C76.3224 60.75 78.6116 61.6982 80.2995 63.386C81.9873 65.0739 82.9355 67.3631 82.9355 69.75C82.9355 72.1369 81.9873 74.4261 80.2995 76.114C78.6116 77.8018 76.3224 78.75 73.9355 78.75C71.5486 78.75 69.2594 77.8018 67.5715 76.114C65.8837 74.4261 64.9355 72.1369 64.9355 69.75C64.9355 67.3631 65.8837 65.0739 67.5715 63.386C69.2594 61.6982 71.5486 60.75 73.9355 60.75ZM83.75 41.9355C85.5402 41.9355 87.2571 42.6467 88.523 43.9125C89.7888 45.1784 90.5 46.8953 90.5 48.6855C90.5 50.4757 89.7888 52.1926 88.523 53.4585C87.2571 54.7243 85.5402 55.4355 83.75 55.4355C81.9598 55.4355 80.2429 54.7243 78.977 53.4585C77.7112 52.1926 77 50.4757 77 48.6855C77 46.8953 77.7112 45.1784 78.977 43.9125C80.2429 42.6467 81.9598 41.9355 83.75 41.9355ZM11.75 27C14.7337 27 17.5952 28.1853 19.705 30.295C21.8147 32.4048 23 35.2663 23 38.25C23 41.2337 21.8147 44.0952 19.705 46.205C17.5952 48.3147 14.7337 49.5 11.75 49.5C8.76631 49.5 5.90483 48.3147 3.79505 46.205C1.68526 44.0952 0.5 41.2337 0.5 38.25C0.5 35.2663 1.68526 32.4048 3.79505 30.295C5.90483 28.1853 8.76631 27 11.75 27ZM80.537 23.4315C81.7305 23.4315 82.8751 23.9056 83.719 24.7495C84.5629 25.5934 85.037 26.738 85.037 27.9315C85.037 29.125 84.5629 30.2696 83.719 31.1135C82.8751 31.9574 81.7305 32.4315 80.537 32.4315C79.3435 32.4315 78.1989 31.9574 77.355 31.1135C76.5111 30.2696 76.037 29.125 76.037 27.9315C76.037 26.738 76.5111 25.5934 77.355 24.7495C78.1989 23.9056 79.3435 23.4315 80.537 23.4315ZM36.5 0C40.0804 0 43.5142 1.42232 46.0459 3.95406C48.5777 6.4858 50 9.91958 50 13.5C50 17.0804 48.5777 20.5142 46.0459 23.0459C43.5142 25.5777 40.0804 27 36.5 27C32.9196 27 29.4858 25.5777 26.9541 23.0459C24.4223 20.5142 23 17.0804 23 13.5C23 9.91958 24.4223 6.4858 26.9541 3.95406C29.4858 1.42232 32.9196 0 36.5 0V0ZM70.25 13.5C70.8467 13.5 71.419 13.7371 71.841 14.159C72.2629 14.581 72.5 15.1533 72.5 15.75C72.5 16.3467 72.2629 16.919 71.841 17.341C71.419 17.7629 70.8467 18 70.25 18C69.6533 18 69.081 17.7629 68.659 17.341C68.2371 16.919 68 16.3467 68 15.75C68 15.1533 68.2371 14.581 68.659 14.159C69.081 13.7371 69.6533 13.5 70.25 13.5Z"
                      fill="#091540"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2540_7791">
                      <rect
                        width="90"
                        height="90"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  className="laptop-view"
                  width="91"
                  height="90"
                  viewBox="0 0 91 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M45.5 90C70.3528 90 90.5 69.8528 90.5 45C90.5 20.1472 70.3528 0 45.5 0C20.6472 0 0.5 20.1472 0.5 45C0.5 69.8528 20.6472 90 45.5 90Z"
                    fill="#FFCC4D"
                  />
                  <path
                    d="M52.9872 67.5023C52.7297 67.5023 52.4722 67.4623 52.2147 67.3798C47.8147 65.9523 43.1772 65.9523 38.7772 67.3798C37.4672 67.8023 36.0547 67.0873 35.6272 65.7748C35.1997 64.4623 35.9197 63.0523 37.2347 62.6248C42.6397 60.8698 48.3522 60.8698 53.7572 62.6248C55.0697 63.0523 55.7897 64.4623 55.3647 65.7748C55.0222 66.8273 54.0422 67.5023 52.9872 67.5023Z"
                    fill="#65471B"
                  />
                  <path
                    d="M76.3381 30.1719C74.0806 37.0344 67.6256 41.9594 60.1031 41.9594C59.7431 41.9594 59.3806 41.9469 59.0156 41.9244C55.3231 41.6919 51.9106 40.2869 49.1406 37.9644C49.2306 39.2019 49.3306 40.4569 49.4806 41.8144C49.8606 45.2844 51.6906 48.0194 54.7706 49.7219C56.8206 50.8569 59.2706 51.4419 61.8031 51.6019C66.1381 51.8744 70.7281 50.9019 73.9856 49.3294C77.4281 47.6669 79.6656 44.6744 80.1256 41.1169C80.5831 37.5794 79.2406 33.8069 76.3381 30.1719Z"
                    fill="white"
                  />
                  <path
                    d="M53.8761 18.9551C50.6336 20.3301 49.0086 24.7076 48.9336 32.1776L49.0311 32.3476C51.2736 35.6451 54.9636 37.9076 59.2511 38.1776C59.5361 38.1951 59.8211 38.2051 60.1036 38.2051C66.6886 38.2051 72.2261 33.3626 73.2361 26.8951C72.9486 26.6326 72.6836 26.3651 72.3786 26.1051C63.0911 18.1801 56.2111 17.9626 53.8761 18.9551Z"
                    fill="#65471B"
                  />
                  <path
                    d="M60.1023 41.9584C67.6248 41.9584 74.0798 37.0334 76.3373 30.1709C75.4523 29.0634 74.4098 27.9709 73.2348 26.8984C72.2248 33.3659 66.6873 38.2084 60.1023 38.2084C59.8198 38.2084 59.5348 38.1984 59.2498 38.1809C54.9623 37.9109 51.2723 35.6484 49.0298 32.3509L48.9323 32.1809C48.9148 33.9334 48.9848 35.8634 49.1398 37.9634C51.9098 40.2859 55.3223 41.6909 59.0148 41.9234C59.3798 41.9484 59.7423 41.9584 60.1023 41.9584Z"
                    fill="#F4900C"
                  />
                  <path
                    d="M54.0331 29.5272C55.5616 29.5272 56.8006 28.2881 56.8006 26.7597C56.8006 25.2312 55.5616 23.9922 54.0331 23.9922C52.5047 23.9922 51.2656 25.2312 51.2656 26.7597C51.2656 28.2881 52.5047 29.5272 54.0331 29.5272Z"
                    fill="white"
                  />
                  <path
                    d="M30.8985 41.9594C23.376 41.9594 16.921 37.0344 14.6635 30.1719C11.761 33.8069 10.421 37.5794 10.876 41.1144C11.3385 44.6719 13.5735 47.6669 17.016 49.3269C20.2735 50.8994 24.861 51.8719 29.1985 51.5994C31.731 51.4394 34.181 50.8569 36.231 49.7194C39.3085 48.0169 41.1385 45.2819 41.521 41.8119C41.671 40.4569 41.771 39.2069 41.861 37.9719C39.1035 40.2794 35.686 41.6894 31.986 41.9219C31.621 41.9494 31.2585 41.9594 30.8985 41.9594Z"
                    fill="white"
                  />
                  <path
                    d="M30.8981 38.2052C31.1806 38.2052 31.4656 38.1952 31.7506 38.1777C36.0381 37.9077 39.7281 35.6452 41.9706 32.3477L42.0681 32.1777C41.9906 24.7077 40.3681 20.3302 37.1256 18.9552C34.7906 17.9627 27.9081 18.1802 18.6231 26.1027C18.3181 26.3627 18.0556 26.6302 17.7656 26.8927C18.7756 33.3627 24.3131 38.2052 30.8981 38.2052Z"
                    fill="#65471B"
                  />
                  <path
                    d="M42.0652 32.1809L41.9677 32.3509C39.7252 35.6484 36.0352 37.9109 31.7477 38.1809C31.4627 38.1984 31.1777 38.2084 30.8952 38.2084C24.3102 38.2084 18.7727 33.3659 17.7627 26.8984C16.5877 27.9709 15.5452 29.0634 14.6602 30.1709C16.9177 37.0334 23.3727 41.9584 30.8952 41.9584C31.2552 41.9584 31.6177 41.9459 31.9827 41.9234C35.6827 41.6909 39.1002 40.2809 41.8577 37.9734C42.0127 35.8709 42.0852 33.9384 42.0652 32.1809Z"
                    fill="#F4900C"
                  />
                  <path
                    d="M24.9508 29.5226C26.4758 29.4276 27.6358 28.1126 27.5383 26.5876C27.4433 25.0626 26.1283 23.9026 24.6033 23.9976C23.0783 24.0926 21.9183 25.4076 22.0133 26.9326C22.1108 28.4576 23.4258 29.6176 24.9508 29.5226Z"
                    fill="white"
                  />
                </svg>
              )}

              {isActive ? (
                <svg
                  className="ipad-view"
                  width="71"
                  height="70"
                  viewBox="0 0 71 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2342_9520)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39 56C40.8565 56 42.637 56.7375 43.9497 58.0503C45.2625 59.363 46 61.1435 46 63C46 64.8565 45.2625 66.637 43.9497 67.9497C42.637 69.2625 40.8565 70 39 70C37.1435 70 35.363 69.2625 34.0503 67.9497C32.7375 66.637 32 64.8565 32 63C32 61.1435 32.7375 59.363 34.0503 58.0503C35.363 56.7375 37.1435 56 39 56ZM17.0935 45.5C19.4141 45.5 21.6397 46.4219 23.2807 48.0628C24.9216 49.7038 25.8435 51.9294 25.8435 54.25C25.8435 56.5706 24.9216 58.7962 23.2807 60.4372C21.6397 62.0781 19.4141 63 17.0935 63C14.7729 63 12.5473 62.0781 10.9063 60.4372C9.26537 58.7962 8.3435 56.5706 8.3435 54.25C8.3435 51.9294 9.26537 49.7038 10.9063 48.0628C12.5473 46.4219 14.7729 45.5 17.0935 45.5ZM57.6165 47.25C59.473 47.25 61.2535 47.9875 62.5662 49.3003C63.879 50.613 64.6165 52.3935 64.6165 54.25C64.6165 56.1065 63.879 57.887 62.5662 59.1997C61.2535 60.5125 59.473 61.25 57.6165 61.25C55.76 61.25 53.9795 60.5125 52.6668 59.1997C51.354 57.887 50.6165 56.1065 50.6165 54.25C50.6165 52.3935 51.354 50.613 52.6668 49.3003C53.9795 47.9875 55.76 47.25 57.6165 47.25ZM65.25 32.6165C66.6424 32.6165 67.9777 33.1696 68.9623 34.1542C69.9469 35.1388 70.5 36.4741 70.5 37.8665C70.5 39.2589 69.9469 40.5942 68.9623 41.5788C67.9777 42.5634 66.6424 43.1165 65.25 43.1165C63.8576 43.1165 62.5223 42.5634 61.5377 41.5788C60.5531 40.5942 60 39.2589 60 37.8665C60 36.4741 60.5531 35.1388 61.5377 34.1542C62.5223 33.1696 63.8576 32.6165 65.25 32.6165ZM9.25 21C11.5706 21 13.7962 21.9219 15.4372 23.5628C17.0781 25.2038 18 27.4294 18 29.75C18 32.0706 17.0781 34.2962 15.4372 35.9372C13.7962 37.5781 11.5706 38.5 9.25 38.5C6.92936 38.5 4.70376 37.5781 3.06282 35.9372C1.42187 34.2962 0.5 32.0706 0.5 29.75C0.5 27.4294 1.42187 25.2038 3.06282 23.5628C4.70376 21.9219 6.92936 21 9.25 21ZM62.751 18.2245C63.6793 18.2245 64.5695 18.5932 65.2259 19.2496C65.8822 19.906 66.251 20.7962 66.251 21.7245C66.251 22.6528 65.8822 23.543 65.2259 24.1994C64.5695 24.8558 63.6793 25.2245 62.751 25.2245C61.8227 25.2245 60.9325 24.8558 60.2761 24.1994C59.6198 23.543 59.251 22.6528 59.251 21.7245C59.251 20.7962 59.6198 19.906 60.2761 19.2496C60.9325 18.5932 61.8227 18.2245 62.751 18.2245ZM28.5 0C31.2848 0 33.9555 1.10625 35.9246 3.07538C37.8938 5.04451 39 7.71523 39 10.5C39 13.2848 37.8938 15.9555 35.9246 17.9246C33.9555 19.8938 31.2848 21 28.5 21C25.7152 21 23.0445 19.8938 21.0754 17.9246C19.1062 15.9555 18 13.2848 18 10.5C18 7.71523 19.1062 5.04451 21.0754 3.07538C23.0445 1.10625 25.7152 0 28.5 0V0ZM54.75 10.5C55.2141 10.5 55.6592 10.6844 55.9874 11.0126C56.3156 11.3408 56.5 11.7859 56.5 12.25C56.5 12.7141 56.3156 13.1592 55.9874 13.4874C55.6592 13.8156 55.2141 14 54.75 14C54.2859 14 53.8408 13.8156 53.5126 13.4874C53.1844 13.1592 53 12.7141 53 12.25C53 11.7859 53.1844 11.3408 53.5126 11.0126C53.8408 10.6844 54.2859 10.5 54.75 10.5Z"
                      fill="#091540"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2342_9520">
                      <rect
                        width="70"
                        height="70"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  className="ipad-view"
                  width="71"
                  height="70"
                  viewBox="0 0 71 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                    fill="#FFCC4D"
                  />
                  <path
                    d="M41.3247 52.501C41.1244 52.501 40.9241 52.4698 40.7238 52.4057C37.3016 51.2954 33.6947 51.2954 30.2725 52.4057C29.2536 52.7343 28.155 52.1782 27.8225 51.1573C27.49 50.1365 28.0499 49.0398 29.0727 48.7073C33.2766 47.3423 37.7197 47.3423 41.9236 48.7073C42.9444 49.0398 43.5044 50.1365 43.1738 51.1573C42.9075 51.976 42.1452 52.501 41.3247 52.501Z"
                    fill="#65471B"
                  />
                  <path
                    d="M59.4837 23.4668C57.7279 28.8043 52.7073 32.6349 46.8565 32.6349C46.5765 32.6349 46.2945 32.6251 46.0106 32.6076C43.1387 32.4268 40.4845 31.334 38.3301 29.5276C38.4001 30.4901 38.4779 31.4662 38.5945 32.5221C38.8901 35.221 40.3134 37.3482 42.709 38.6724C44.3034 39.5551 46.209 40.0101 48.1787 40.1346C51.5504 40.3465 55.1204 39.5901 57.654 38.3671C60.3315 37.074 62.0717 34.7465 62.4295 31.9796C62.7854 29.2282 61.7412 26.294 59.4837 23.4668Z"
                    fill="white"
                  />
                  <path
                    d="M42.0141 14.7435C39.4921 15.813 38.2283 19.2177 38.1699 25.0277L38.2458 25.1599C39.9899 27.7246 42.8599 29.4844 46.1946 29.6944C46.4163 29.708 46.638 29.7158 46.8577 29.7158C51.9794 29.7158 56.2863 25.9494 57.0719 20.9191C56.8483 20.7149 56.6421 20.5069 56.4049 20.3046C49.1813 14.1408 43.8302 13.9716 42.0141 14.7435Z"
                    fill="#65471B"
                  />
                  <path
                    d="M46.8558 32.6352C52.7067 32.6352 57.7272 28.8047 59.4831 23.4672C58.7947 22.6058 57.9839 21.756 57.07 20.9219C56.2844 25.9522 51.9775 29.7185 46.8558 29.7185C46.6361 29.7185 46.4144 29.7108 46.1928 29.6972C42.8581 29.4872 39.9881 27.7274 38.2439 25.1627L38.1681 25.0305C38.1544 26.3935 38.2089 27.8947 38.3294 29.528C40.4839 31.3344 43.1381 32.4272 46.01 32.608C46.2939 32.6274 46.5758 32.6352 46.8558 32.6352Z"
                    fill="#F4900C"
                  />
                  <path
                    d="M42.1369 22.9671C43.3257 22.9671 44.2894 22.0034 44.2894 20.8146C44.2894 19.6258 43.3257 18.6621 42.1369 18.6621C40.9481 18.6621 39.9844 19.6258 39.9844 20.8146C39.9844 22.0034 40.9481 22.9671 42.1369 22.9671Z"
                    fill="white"
                  />
                  <path
                    d="M24.1427 32.6349C18.2918 32.6349 13.2713 28.8043 11.5154 23.4668C9.25794 26.294 8.21572 29.2282 8.5696 31.9776C8.92933 34.7446 10.6677 37.074 13.3452 38.3651C15.8788 39.5882 19.4468 40.3446 22.8204 40.1326C24.7902 40.0082 26.6957 39.5551 28.2902 38.6704C30.6838 37.3462 32.1071 35.219 32.4046 32.5201C32.5213 31.4662 32.5991 30.494 32.6691 29.5335C30.5243 31.3282 27.8663 32.4249 24.9885 32.6057C24.7046 32.6271 24.4227 32.6349 24.1427 32.6349Z"
                    fill="white"
                  />
                  <path
                    d="M24.1439 29.7158C24.3636 29.7158 24.5852 29.708 24.8069 29.6944C28.1416 29.4844 31.0116 27.7247 32.7558 25.1599L32.8316 25.0277C32.7714 19.2177 31.5094 15.813 28.9875 14.7436C27.1714 13.9716 21.8183 14.1408 14.5966 20.3027C14.3594 20.5049 14.1552 20.713 13.9297 20.9172C14.7152 25.9494 19.0222 29.7158 24.1439 29.7158Z"
                    fill="#65471B"
                  />
                  <path
                    d="M32.8287 25.0305L32.7528 25.1627C31.0087 27.7274 28.1387 29.4872 24.8039 29.6972C24.5823 29.7108 24.3606 29.7185 24.1409 29.7185C19.0192 29.7185 14.7123 25.9522 13.9267 20.9219C13.0128 21.756 12.202 22.6058 11.5137 23.4672C13.2695 28.8047 18.2901 32.6352 24.1409 32.6352C24.4209 32.6352 24.7028 32.6255 24.9867 32.608C27.8645 32.4272 30.5226 31.3305 32.6673 29.5358C32.7878 27.9005 32.8442 26.3974 32.8287 25.0305Z"
                    fill="#F4900C"
                  />
                  <path
                    d="M19.5175 22.9636C20.7036 22.8897 21.6058 21.8669 21.53 20.6808C21.4561 19.4947 20.4333 18.5925 19.2472 18.6663C18.0611 18.7402 17.1589 19.763 17.2327 20.9491C17.3086 22.1352 18.3314 23.0375 19.5175 22.9636Z"
                    fill="white"
                  />
                </svg>
              )}

              {isActive ? (
                <svg
                  className="mobile-view"
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2342_9545)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.25 36C26.4435 36 27.5881 36.4741 28.432 37.318C29.2759 38.1619 29.75 39.3065 29.75 40.5C29.75 41.6935 29.2759 42.8381 28.432 43.682C27.5881 44.5259 26.4435 45 25.25 45C24.0565 45 22.9119 44.5259 22.068 43.682C21.2241 42.8381 20.75 41.6935 20.75 40.5C20.75 39.3065 21.2241 38.1619 22.068 37.318C22.9119 36.4741 24.0565 36 25.25 36ZM11.1673 29.25C12.6591 29.25 14.0898 29.8426 15.1447 30.8975C16.1996 31.9524 16.7922 33.3832 16.7922 34.875C16.7922 36.3668 16.1996 37.7976 15.1447 38.8525C14.0898 39.9074 12.6591 40.5 11.1673 40.5C9.67541 40.5 8.24467 39.9074 7.18977 38.8525C6.13488 37.7976 5.54225 36.3668 5.54225 34.875C5.54225 33.3832 6.13488 31.9524 7.18977 30.8975C8.24467 29.8426 9.67541 29.25 11.1673 29.25ZM37.2178 30.375C38.4112 30.375 39.5558 30.8491 40.3997 31.693C41.2436 32.5369 41.7178 33.6815 41.7178 34.875C41.7178 36.0685 41.2436 37.2131 40.3997 38.057C39.5558 38.9009 38.4112 39.375 37.2178 39.375C36.0243 39.375 34.8797 38.9009 34.0358 38.057C33.1919 37.2131 32.7178 36.0685 32.7178 34.875C32.7178 33.6815 33.1919 32.5369 34.0358 31.693C34.8797 30.8491 36.0243 30.375 37.2178 30.375ZM42.125 20.9678C43.0201 20.9678 43.8785 21.3233 44.5115 21.9563C45.1444 22.5892 45.5 23.4476 45.5 24.3428C45.5 25.2379 45.1444 26.0963 44.5115 26.7292C43.8785 27.3622 43.0201 27.7178 42.125 27.7178C41.2299 27.7178 40.3715 27.3622 39.7385 26.7292C39.1056 26.0963 38.75 25.2379 38.75 24.3428C38.75 23.4476 39.1056 22.5892 39.7385 21.9563C40.3715 21.3233 41.2299 20.9678 42.125 20.9678ZM6.125 13.5C7.61684 13.5 9.04758 14.0926 10.1025 15.1475C11.1574 16.2024 11.75 17.6332 11.75 19.125C11.75 20.6168 11.1574 22.0476 10.1025 23.1025C9.04758 24.1574 7.61684 24.75 6.125 24.75C4.63316 24.75 3.20242 24.1574 2.14752 23.1025C1.09263 22.0476 0.5 20.6168 0.5 19.125C0.5 17.6332 1.09263 16.2024 2.14752 15.1475C3.20242 14.0926 4.63316 13.5 6.125 13.5ZM40.5185 11.7157C41.1152 11.7157 41.6875 11.9528 42.1095 12.3748C42.5314 12.7967 42.7685 13.369 42.7685 13.9657C42.7685 14.5625 42.5314 15.1348 42.1095 15.5567C41.6875 15.9787 41.1152 16.2157 40.5185 16.2157C39.9218 16.2157 39.3495 15.9787 38.9275 15.5567C38.5056 15.1348 38.2685 14.5625 38.2685 13.9657C38.2685 13.369 38.5056 12.7967 38.9275 12.3748C39.3495 11.9528 39.9218 11.7157 40.5185 11.7157ZM18.5 0C20.2902 0 22.0071 0.711159 23.273 1.97703C24.5388 3.2429 25.25 4.95979 25.25 6.75C25.25 8.54021 24.5388 10.2571 23.273 11.523C22.0071 12.7888 20.2902 13.5 18.5 13.5C16.7098 13.5 14.9929 12.7888 13.727 11.523C12.4612 10.2571 11.75 8.54021 11.75 6.75C11.75 4.95979 12.4612 3.2429 13.727 1.97703C14.9929 0.711159 16.7098 0 18.5 0V0ZM35.375 6.75C35.6734 6.75 35.9595 6.86853 36.1705 7.0795C36.3815 7.29048 36.5 7.57663 36.5 7.875C36.5 8.17337 36.3815 8.45952 36.1705 8.6705C35.9595 8.88147 35.6734 9 35.375 9C35.0766 9 34.7905 8.88147 34.5795 8.6705C34.3685 8.45952 34.25 8.17337 34.25 7.875C34.25 7.57663 34.3685 7.29048 34.5795 7.0795C34.7905 6.86853 35.0766 6.75 35.375 6.75Z"
                      fill="#091540"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2342_9545">
                      <rect
                        width="45"
                        height="45"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  className="mobile-view"
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23 45C35.4264 45 45.5 34.9264 45.5 22.5C45.5 10.0736 35.4264 0 23 0C10.5736 0 0.5 10.0736 0.5 22.5C0.5 34.9264 10.5736 45 23 45Z"
                    fill="#FFCC4D"
                  />
                  <path
                    d="M26.7436 33.7512C26.6148 33.7512 26.4861 33.7312 26.3573 33.6899C24.1573 32.9762 21.8386 32.9762 19.6386 33.6899C18.9836 33.9012 18.2773 33.5437 18.0636 32.8874C17.8498 32.2312 18.2098 31.5262 18.8673 31.3124C21.5698 30.4349 24.4261 30.4349 27.1286 31.3124C27.7848 31.5262 28.1448 32.2312 27.9323 32.8874C27.7611 33.4137 27.2711 33.7512 26.7436 33.7512Z"
                    fill="#65471B"
                  />
                  <path
                    d="M38.4191 15.0859C37.2903 18.5172 34.0628 20.9797 30.3016 20.9797C30.1216 20.9797 29.9403 20.9734 29.7578 20.9622C27.9116 20.8459 26.2053 20.1434 24.8203 18.9822C24.8653 19.6009 24.9153 20.2284 24.9903 20.9072C25.1803 22.6422 26.0953 24.0097 27.6353 24.8609C28.6603 25.4284 29.8853 25.7209 31.1516 25.8009C33.3191 25.9372 35.6141 25.4509 37.2428 24.6647C38.9641 23.8334 40.0828 22.3372 40.3128 20.5584C40.5416 18.7897 39.8703 16.9034 38.4191 15.0859Z"
                    fill="white"
                  />
                  <path
                    d="M27.188 9.47757C25.5668 10.1651 24.7543 12.3538 24.7168 16.0888L24.7655 16.1738C25.8868 17.8226 27.7318 18.9538 29.8755 19.0888C30.018 19.0976 30.1605 19.1026 30.3018 19.1026C33.5943 19.1026 36.363 16.6813 36.868 13.4476C36.7243 13.3163 36.5918 13.1826 36.4393 13.0526C31.7955 9.09006 28.3555 8.98132 27.188 9.47757Z"
                    fill="#65471B"
                  />
                  <path
                    d="M30.3012 20.9792C34.0624 20.9792 37.2899 18.5167 38.4187 15.0855C37.9762 14.5317 37.4549 13.9855 36.8674 13.4492C36.3624 16.683 33.5937 19.1042 30.3012 19.1042C30.1599 19.1042 30.0174 19.0992 29.8749 19.0905C27.7312 18.9555 25.8862 17.8242 24.7649 16.1755L24.7162 16.0905C24.7074 16.9667 24.7424 17.9317 24.8199 18.9817C26.2049 20.143 27.9112 20.8455 29.7574 20.9617C29.9399 20.9742 30.1212 20.9792 30.3012 20.9792Z"
                    fill="#F4900C"
                  />
                  <path
                    d="M27.2666 14.7636C28.0308 14.7636 28.6503 14.1441 28.6503 13.3798C28.6503 12.6156 28.0308 11.9961 27.2666 11.9961C26.5023 11.9961 25.8828 12.6156 25.8828 13.3798C25.8828 14.1441 26.5023 14.7636 27.2666 14.7636Z"
                    fill="white"
                  />
                  <path
                    d="M15.6993 20.9797C11.938 20.9797 8.71052 18.5172 7.58177 15.0859C6.13052 16.9034 5.46052 18.7897 5.68802 20.5572C5.91927 22.3359 7.03677 23.8334 8.75802 24.6634C10.3868 25.4497 12.6805 25.9359 14.8493 25.7997C16.1155 25.7197 17.3405 25.4284 18.3655 24.8597C19.9043 24.0084 20.8193 22.6409 21.0105 20.9059C21.0855 20.2284 21.1355 19.6034 21.1805 18.9859C19.8018 20.1397 18.093 20.8447 16.243 20.9609C16.0605 20.9747 15.8793 20.9797 15.6993 20.9797Z"
                    fill="white"
                  />
                  <path
                    d="M15.6991 19.1026C15.8403 19.1026 15.9828 19.0976 16.1253 19.0888C18.2691 18.9538 20.1141 17.8226 21.2353 16.1738L21.2841 16.0888C21.2453 12.3538 20.4341 10.1651 18.8128 9.47758C17.6453 8.98133 14.2041 9.09008 9.56156 13.0513C9.40906 13.1813 9.27781 13.3151 9.13281 13.4463C9.63781 16.6813 12.4066 19.1026 15.6991 19.1026Z"
                    fill="#65471B"
                  />
                  <path
                    d="M21.2826 16.0905L21.2338 16.1755C20.1126 17.8242 18.2676 18.9555 16.1238 19.0905C15.9813 19.0992 15.8388 19.1042 15.6976 19.1042C12.4051 19.1042 9.63633 16.683 9.13133 13.4492C8.54383 13.9855 8.02258 14.5317 7.58008 15.0855C8.70883 18.5167 11.9363 20.9792 15.6976 20.9792C15.8776 20.9792 16.0588 20.973 16.2413 20.9617C18.0913 20.8455 19.8001 20.1405 21.1788 18.9867C21.2563 17.9355 21.2926 16.9692 21.2826 16.0905Z"
                    fill="#F4900C"
                  />
                  <path
                    d="M12.7254 14.7613C13.4879 14.7138 14.0679 14.0563 14.0191 13.2938C13.9716 12.5313 13.3141 11.9513 12.5516 11.9988C11.7891 12.0463 11.2091 12.7038 11.2566 13.4663C11.3054 14.2288 11.9629 14.8088 12.7254 14.7613Z"
                    fill="white"
                  />
                </svg>
              )}
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button className="modal-btn" id="logout-btn" onClick={logout}>
                Log Out
              </Button>
              <Button
                className="modal-btn"
                id="cancel-btn"
                onClick={props.onHide}>
                Cancel
              </Button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LogoutPage;
