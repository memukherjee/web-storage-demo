import StorageSection from "./components/StorageSection";
import useWebStorage from "./hooks/useWebStorage";

function App() {
  const { webStorages } = useWebStorage();
  return (
    <>
      <header>
        <h1 className="text-7xl font-semibold text-accent">Web Storage </h1>
      </header>
      <main className="flex flex-col xl:flex-row justify-start xl:justify-between items-center xl:items-start mt-12 max-w-7xl mx-auto">
        {webStorages.map((storage, index) => (
          <StorageSection
            key={index}
            heading={storage.heading}
            description={storage.description}
            stateData={storage.stateData}
            hasExpiry={storage.hasExpiry}
            addData={storage.addData}
            removeData={storage.removeData}
            clearAll={storage.clearAll}
          />
        ))}
      </main>
    </>
  );
}

export default App;
