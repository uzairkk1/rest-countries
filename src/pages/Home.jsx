import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const filteredData = search
    ? data.filter(
        (d) =>
          d.name.official.toLowerCase().includes(search.toLowerCase()) ||
          d.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  return (
    <div className="">
      <div className="filter__wrapper">
        <div className="search__wrapper">
          <input
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("search_country")}
          />
        </div>
        <div className="region__wrapper">
          <select name="" id="">
            <option value="" selected>
              Select Region
            </option>
            <option value="USA">USA</option>
            <option value="EU">Europe</option>
          </select>
        </div>
      </div>
      <div className="countries__wrapper flex">
        {filteredData.map((item) => {
          return (
            <div key={item.name.official} className="col-3">
              <Link to={`/country/${item.cioc || item.cca3 || item.cca2}`}>
                <Card item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
