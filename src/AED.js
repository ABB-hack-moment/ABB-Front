import styled from "styled-components";
import Map from "./Map2";
import Header from "./common/Header";
import { useEffect, useState } from "react";
import { get_aeds } from "./api";

import SockJS from "sockjs-client";

import Stomp from "stompjs";

const StyledAED = styled.div``;

// connection 설정
const sockJS = new SockJS("http://localhost:8080/aed-status"); // ①
const stompClient = Stomp.over(sockJS);

function AED() {
  const [aeds, setAeds] = useState();
  const request_aeds = async () => {
    const res = await get_aeds();
    setAeds(res.data);
    console.log("res : ", res);
  };
  const connect = () => {
    stompClient.connect({}, onConnected, onError); // ②
  };

  useEffect(() => {
    request_aeds();
    connect();
  }, []);

  // When socket connection connect
  const onConnected = () => {
    stompClient.subscribe("/topic/aed", (payload) => {
      const data = JSON.parse(payload.body);
      console.log("data : ", data);
      setAeds((prevAeds) => {
        return prevAeds.map((aed) => {
          if (aed.id === data.id) {
            return {
              ...aed,
              isExist: data.isExist,
              isWorked: data.isWorked,
              lastCheckDate: data.lastCheckDate,
            };
          }
          return aed;
        });
      });
    });
  };

  // when socket connection disconnect
  const onError = () => {
    console.log(">>> DISCONNECT");
  };

  if (!aeds) {
    return <></>;
  }
  return (
    <StyledAED>
      <Header />
      <Map aeds={aeds} />
    </StyledAED>
  );
}

export default AED;
