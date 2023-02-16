import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "",
    image: "",
    route: "/",
  },
  socials: [],
  menus: [],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Recommend Machine by{" "}
      <MKTypography
        component="a"
        href="/"
        target="_self"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Restaurants Recommend Team
      </MKTypography>
      .
    </MKTypography>
  ),
};
