import React from "react";
import { useRouter } from "next/router";
import propTypes from "prop-types";

type Props = {
  item: string;
}

const NavItem = ({ item }: Props) => {
  const router = useRouter();
  return <>{router.pathname === "/" ? item : ""}</>;
};

export default NavItem;

// proptypes check
NavItem.propTypes = {
  item: propTypes.string,
};