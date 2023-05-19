import Layout from "@/components/layout/Layout";
import { setBreadCrumbs } from "@/redux/breadcrumbs";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AboutUs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBreadCrumbs([
        {
          label: "Home",
          link: "/",
        },
        {
          label: "About Us",
          link: "/about-us",
        },
      ])
    );
  }, []);
  return (
    <Layout>
      <div className="container py-10">ads</div>
    </Layout>
  );
}
