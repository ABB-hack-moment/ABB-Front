// import { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// const { kakao } = window;
// const StyledModal = styled.div`
//   .wrap {
//     width: 350px;
//   }
//   .wrap .info {
//     width: 100%;
//   }
// `;

// function Map({ aeds }) {
//   const mapRef = useRef();

//   useEffect(() => {
//     var container = document.getElementById("map");
//     var options = {
//       center: new kakao.maps.LatLng(35.877661793852454, 128.62796556801032),
//       level: 3,
//     };
//     //var map = new kakao.maps.Map(container, options);
//     mapRef.current = new kakao.maps.Map(container, options);
//     var imageSrc = "/heart.png", // 마커이미지의 주소입니다
//       imageSize = new kakao.maps.Size(30, 30); // 마커이미지의 크기입니다

//     aeds
//       .filter((aed) => aed.exist && aed.worked)
//       .map((aed) => {
//         console.log("aed : ", aed);
//         var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
//           markerPosition = new kakao.maps.LatLng(aed.locationY, aed.locationX);

//         // 마커를 생성합니다
//         var marker = new kakao.maps.Marker({
//           map: mapRef.current,
//           position: markerPosition,
//           image: markerImage,
//         });
//         console.log("marker : ", marker);
//         // 마커가 지도 위에 표시되도록 설정합니다
//         // marker.setMap(map.mapRef.current);
//         console.log("aed.lastCheckDate : ", aed);

//         var content = `<div class="wrap">
//             <div class="info">
//                 <div class="title">
//                     ${aed.location.split("]")[1]}

//                 </div>
//                 <div class="body">
//                     <div class="img">
//                         <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">
//                    </div>
//                     <div class="desc">
//                         <div class="ellipsis">실제 위치 | ${aed.address}</div>
//                         <div class="jibun ellipsis">최근 관리 이력 | ${
//                           aed.lastCheckTime
//                         }</div>
//                         <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;

//         var overlay = new kakao.maps.CustomOverlay({
//           content: content,
//           position: marker.getPosition(),
//         });

//         kakao.maps.event.addListener(marker, "mouseover", function () {
//           overlay.setMap(mapRef.current);
//         });
//         kakao.maps.event.addListener(marker, "mouseout", function () {
//           setTimeout(function () {
//             overlay.setMap(null);
//           });
//         });
//       });
//   }, [aeds]);

//   return (
//     <StyledModal>
//       <div id="map" style={{ width: "390px", height: "844px" }}></div>
//     </StyledModal>
//   );
// }

// export default Map;
