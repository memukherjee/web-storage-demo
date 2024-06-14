import { useState } from "react";
import InputBox from "./InputBox";
import { FaTrashAlt } from "react-icons/fa";

function StorageSection({
  heading,
  description,
  stateData,
  hasExpiry,
  addData,
  removeData,
  clearAll,
}) {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [expiresIn, setExpiresIn] = useState();

  console.log(stateData);
  const addDataHandler = () => {
    if (!key || !value) {
      return;
    }
    addData(key, value, expiresIn);
    setKey("");
    setValue("");
    setExpiresIn("");
  };

  return (
    <section className="max-w-sm">
      <h2 className="text-4xl font-semibold mb-2 leading-none">{heading}</h2>
      <p className="text-xs max-w-[12rem] mx-auto leading-3 mb-6">
        {description}
      </p>
      <div className="input-group flex justify-center items-center gap-x-2">
        <InputBox
          type="text"
          name="key"
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <InputBox
          type="text"
          name="value"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {hasExpiry && (
          <InputBox
            type="number"
            name="expiresIn"
            placeholder="Expires in"
            value={expiresIn}
            onChange={(e) => setExpiresIn(parseInt(e.target.value))}
          />
        )}
        <button
          type="button"
          onClick={addDataHandler}
          className="bg-secondary text-primary px-2 py-1 hover:bg-accent hover:text-secondary transition-colors duration-300 ease-in-out"
        >
          Save
        </button>
        <button
          type="button"
          onClick={clearAll}
          className="bg-secondary text-primary px-2 py-1 hover:bg-red-400 hover:text-secondary transition-colors duration-300 ease-in-out whitespace-nowrap"
        >
          Clear All
        </button>
      </div>
      <div className="text-sm mt-4 flex flex-col gap-y-1">
        {Object.keys(stateData).length === 0
          ? "No data"
          : Object.entries(stateData).map(([key, value]) => (
              <span
                key={key}
                className="flex justify-between items-center gap-x-1"
              >
                <span className="overflow-hidden bg-secondary text-secondary px-1 py-0.5">
                  <span className="font-semibold">{key}:&nbsp;</span>
                  <span className="break-words">{value}</span>
                </span>
                <button
                  type="button"
                  onClick={() => removeData(key)}
                  className="text-red-400"
                >
                  <FaTrashAlt />
                </button>
              </span>
            ))}
      </div>
    </section>
  );
}

export default StorageSection;
