import { Link, useNavigate } from "react-router-dom";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Index,
} from "react-instantsearch-dom";
import moment from "moment";
import { Container } from "../../styled/Container.styled";
import { StyledAlgoliaSearch } from "../../styled/AlgoliaSearch.styled";
import { useState } from "react";

const searchClient = algoliasearch(
  process.env.REACT_APP_APP_KEY,
  process.env.REACT_APP_API_KEY
);



const result = ({ hit }) => {
  return (
    <>
      <div>
        <Link to={"/" + hit.slug}>
          <img src={hit.image} alt={hit.title} className="global-image" />
        </Link>
      </div>

      <div>
        <small>{moment(hit.published_at).format("MMM DD, YYYY")}</small>
        <h5>
          {" "}
          <Link to={"/" + hit.slug}>{hit.title}</Link>
        </h5>
      </div>
    </>
  );
};

const resultTemplate = ({ hit }) => {
  return (
    <>
      <div>
        <Link to={hit.url_prefix + "/" + hit.name}>
          <img src={hit.image} alt={hit.title} className="global-image" />
        </Link>
      </div>

      <div>
        <h5>
          <Link to={hit.url_prefix + "/" + hit.name}>{hit.name}</Link>
        </h5>
      </div>
    </>
  );
};
function AlgoliaSearch(props) {
  const [showHits, setShowHits] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <InstantSearch searchClient={searchClient} indexName="am_blog">
        <StyledAlgoliaSearch>
          <button
            onClick={() => navigate(-1, { replace: true })}
            className="search-close"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.997 10.846L1.369.219 1.363.214A.814.814 0 00.818.005.821.821 0 000 .822c0 .201.074.395.208.545l.006.006L10.842 12 .214 22.626l-.006.006a.822.822 0 00-.208.546c0 .447.37.817.818.817a.814.814 0 00.551-.215l10.628-10.627 10.628 10.628.005.005a.816.816 0 001.368-.603.816.816 0 00-.213-.552l-.006-.005L13.151 12l10.63-10.627c.003 0 .004-.003.006-.005A.82.82 0 0024 .817a.817.817 0 00-1.37-.602l-.004.004-10.63 10.627z"></path>
            </svg>
          </button>
          <div className="search-content">
            <SearchBox onChange={() => setShowHits(true)} />
            <div className="search-meta">{showHits && <Stats/>}</div>
            <Index indexName="am_blog">
              {showHits && <Hits hitComponent={result} />}
            </Index>
            <Index indexName="am_blog_authors">
              {showHits && <Hits hitComponent={resultTemplate} />}
            </Index>
            <Index indexName="am_blog_tags">
              {showHits && <Hits hitComponent={resultTemplate} />}
            </Index>
          </div>
        </StyledAlgoliaSearch>
      </InstantSearch>
    </Container>
  );
}

export default AlgoliaSearch;
