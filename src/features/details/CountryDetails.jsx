import { Info } from "./Info";
import { useDetails } from "./useDetails";

export const CountryDetails = ({ name = "", navigate }) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === "loading" && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
