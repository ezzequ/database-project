import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaGlasses } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function OnlineFeed() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <FaGlasses size={30} color="#87204D" />
          <p>My Posts</p>
        </div>
        <div style={{ padding: "2rem" }}>
          <MdPostAdd size={30} color="#87204D" />
          <p>Create New Post</p>
        </div>
      </div>
      <div className="grid">
        <Grid container>
          <Grid
            item
            md={4}
            sm={5}
            sx={{
              mt: "0.1%",
              mb: "3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ede8ea",
                height: 300,
                width: 300,
              }}
            >
              <Box
                sx={{
                  position: "absolute",

                  // left: "270px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <FaTrashAlt
                  size={15}
                  color={"black"}
                  style={{ padding: "1rem" }}
                />

                <FaPen size={15} color={"black"} style={{ padding: "1rem" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  padding: "1rem",
                  position: "relative",
                }}
              >
                <Typography variant="h6">Title:</Typography>
                <Typography variant="h6">Author:</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  exercitationem veritatis aspernatur ad. Voluptate omnis sequi
                  in sunt, fuga magni veritatis recusandae inventore iusto
                  exercitationem beatae, voluptatem eius obcaecati dignissimos.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
