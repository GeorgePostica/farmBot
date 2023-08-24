import React, { useCallback, useState } from 'react';
import PlantTypesList from './plant-types/PlantTypesList';
import ParametersList from './app-parameters/ParametersList';
import TabButton from './TabButton';

const TABS = {
  PLANT_TYPES: { tabKey: 'plant_types', name: 'Tipuri de plante' },
  APP_PARAMETERS: { tabKey: 'app-parameters', name: 'Parametri ai aplicației' },
};

const Administration = () => {
  const [key, setKey] = useState(TABS.PLANT_TYPES.tabKey);

  const renderPageList = useCallback(() => {
    switch (key) {
      case TABS.PLANT_TYPES.tabKey:
        return <PlantTypesList />;
      case TABS.APP_PARAMETERS.tabKey:
        return <ParametersList />;
      default:
        return <></>;
    }
  }, [key]);

  const switchKey = (newKey) => {
    setKey((prev) => (prev === newKey ? null : newKey));
  };

  return (
    <div className="administration">
      <div className="administration__tabs">
        <TabButton current={key} {...TABS.PLANT_TYPES} onClick={switchKey} />
        <TabButton current={key} {...TABS.APP_PARAMETERS} onClick={switchKey} />
      </div>
      {renderPageList()}
    </div>
  );
};

export default Administration;
