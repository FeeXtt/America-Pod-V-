import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import JidelniKarta from "../../components/JidelniKarta/JidelniKarta";

export default function JidelniListek() {
  return (
    <>
        <Container maxWidth="sm" >
            <JidelniKarta volume="125g" item="burgir" prize="190"/>
        </Container>
    </>
  );
}