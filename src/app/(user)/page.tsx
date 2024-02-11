import AppFooter from "@/components/footer/app.footer";
import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
// import { sendRequestJS } from "@/utils/old.api";
import { sendRequest } from "@/utils/api";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


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
  const session = await getServerSession(authOptions);
  // console.log("session returned : ", session);
  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10},
    
  });


  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10},
    
  });

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10},
    
  });
  return (
    <Container>
      <MainSlider 
        data={chills?.data ?? []}
        title=""
      />
      <MainSlider 
        data={workouts?.data ?? []}
        title=""
      />
      <MainSlider 
        data={party?.data ?? []}
        title=""
      />
      <AppFooter />
    </Container>
  );
}
