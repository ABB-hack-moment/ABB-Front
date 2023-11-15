import { useEffect, useRef } from "react";
import styled from "styled-components";

const { kakao } = window;

const StyledModal = styled.div`
  /* 스타일 정의 */
`;

function Map({ aeds }) {
  const mapContainerRef = useRef(null); // 지도 컨테이너에 대한 ref
  const mapRef = useRef(null); // 지도 인스턴스에 대한 ref
  const markersRef = useRef([]); // 마커들을 저장할 ref

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // 지도 인스턴스가 아직 초기화되지 않았다면 초기화합니다.
      const options = {
        center: new kakao.maps.LatLng(35.877661793852454, 128.62796556801032),
        level: 3,
      };
      mapRef.current = new kakao.maps.Map(mapContainerRef.current, options);
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // 기존 마커를 지도에서 제거합니다.
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = []; // 마커 참조 초기화

      // 새로운 마커를 생성합니다.
      aeds.forEach((aed) => {
        if (aed.exist && aed.worked) {
          const imageSrc = "/heart.png",
            imageSize = new kakao.maps.Size(30, 30),
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
            markerPosition = new kakao.maps.LatLng(
              aed.locationY,
              aed.locationX
            );

          const marker = new kakao.maps.Marker({
            map: mapRef.current,
            position: markerPosition,
            image: markerImage,
          });

          markersRef.current.push(marker); // 새 마커 참조 추가

          // 나머지 마커와 오버레이 관련 로직…
        }
      });
    }
  }, [aeds]); // aeds 배열이 변경될 때마다 마커 업데이트

  return (
    <StyledModal>
      <div
        ref={mapContainerRef}
        id="map"
        style={{ width: "390px", height: "844px" }}
      ></div>
    </StyledModal>
  );
}

export default Map;
