import styled from '@emotion/styled';

import MapLoading from '@/components/common/MapLoading';
import PageContainer from '@/components/layouts/PageContainer';
import { positionAbsoluteXYCenter } from '@/styles/common';
import { layouts } from '@/styles/layouts';

import useHomePage from './logics';

export default function HomePage() {
  const { isLoading, isError, isHasMapImage, mapRef, initMap } = useHomePage();

  if (isLoading || isError) {
    return <MapLoading />;
  }

  return (
    <PageContainer>
      <Map ref={mapRef} id="map" />
      {!isHasMapImage && (
        <ReloadButton onClick={initMap}>맵 다시 불러오기</ReloadButton>
      )}
    </PageContainer>
  );
}

const Map = styled.div`
  position: relative;
  height: calc(100vh - ${layouts.gnb});
`;

const ReloadButton = styled.button`
  ${positionAbsoluteXYCenter};
  background-color: #ddd;
  padding: 5px;
`;
