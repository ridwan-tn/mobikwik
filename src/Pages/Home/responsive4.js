import React from "react";
import Tabres from './Tabresponsive'
import ScrollableTabsButtonForce from './Trial'
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <p><Tabres/></p>;
const DesktopComponent = () => <p><ScrollableTabsButtonForce/></p>;

const MyComponent = () => {
  const { width } = useViewport();
const breakpoint = 800;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Tabresponse() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
