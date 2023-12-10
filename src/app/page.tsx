import AppFooter from "@/components/footer/app.footer";
import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
// import { sendRequestJS } from "@/utils/old.api";
import { sendRequest } from "@/utils/api";
export default async function HomePage() {
  // const res = await fetch("http://localhost:8000/api/v1/tracks/top",{
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     category: "CHILL",
  //     limit: 10
  //   })
  // });
  // console.log("check response server returned : ", await res.json());
  const res = await sendRequest<IBackendRes<ITrackTop>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 2},
    
  });
  console.log("check response server returned : ", res.data);
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
      <AppFooter />
    </Container>
  );
}
