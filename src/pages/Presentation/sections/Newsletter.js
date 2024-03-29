/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKSelect from "components/MKSelect";
import TableComponent from "components/TableComponent";

// Images
import macbook from "assets/images/macbook.png";

function Newsletter() {
  const [showTable, setShowTable] = useState(false);
  const handleClick = () => {
    setShowTable(true);
  };

  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        {showTable ? (
          <TableComponent />
        ) : (
          <Grid container alignItems="center">
            <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
              <MKTypography variant="h4">맛집 추천</MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                당신이 선호하는 맛집과 유사한 맛집들을 추천해 드립니다.
              </MKTypography>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <MKSelect />
                </Grid>
                <Grid item xs={8}>
                  <MKInput type="text" fullWidth placeholder="가게명을 입력해 주세요." />
                </Grid>
                <Grid item xs={4}>
                  <MKButton
                    variant="gradient"
                    color="info"
                    sx={{ height: "100%" }}
                    onClick={handleClick}
                  >
                    검색
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
              <MKBox position="relative">
                <MKBox component="img" src={macbook} alt="macbook" width="100%" />
              </MKBox>
            </Grid>
          </Grid>
        )}
      </Container>
    </MKBox>
  );
}

export default Newsletter;
