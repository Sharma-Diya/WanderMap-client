const CustomMarker = ({ location, clusterer }) => {
    const [refCallback, marker] = useAdvancedMarkerRef();
  
    useEffect(() => {
      if (!clusterer || !marker) return;
      clusterer.addMarker(marker);
  
      return () => {
        clusterer.removeMarker(marker);
      };
    }, [clusterer, marker]);
  
    return (
      <AdvancedMarker
        position={{ lng: location.longitude, lat: location.latitude }}
        key={location.id}
        ref={refCallback}
        title={location.activity}
      />
    );
  };
  