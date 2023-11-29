import AppFooter from "@/components/footer/app.footer";
import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
export default function HomePage() {
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
      <AppFooter />
    </Container>
  );
}
