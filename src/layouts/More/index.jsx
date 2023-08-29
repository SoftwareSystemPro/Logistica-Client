import React, { useEffect } from "react";
import MoreComponent from "../../components/more";
import { useDispatch, useSelector } from "react-redux";
import { SeoGet } from "../../redux/seo";
import { Helmet, HelmetProvider } from "react-helmet-async";

function More() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(SeoGet());
  }, []);
  const Data = useSelector((state) => state.seo.SeoGet.data);
  return (
    <>
      <HelmetProvider>
        {Data.map((elem) => (
          <Helmet>
            <title>{elem.meta_title}</title>
            <meta name={elem.meta_key} content={elem.meta_description} />
            <link rel="cononical" href="/contact" />
          </Helmet>
        ))}
        <MoreComponent />
      </HelmetProvider>
    </>
  );
}

export default More;
