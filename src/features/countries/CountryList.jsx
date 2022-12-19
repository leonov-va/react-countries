import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { useCountries } from "./useCountries";

const CountryList = () => {
  const [countries, { status, error }] = useCountries();
  const navigate = useNavigate();

  return (
    <>
      {error && <h1>Can't fetch data</h1>}

      {status === "loading" && <h1>Loading...</h1>}

      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export { CountryList };
