import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/PageLayout.module.scss";
import { Navigation } from "@/components/Navigation/Navigation";
import { AppContextProvider } from "@/context/AppContext";

type PageLayoutProps = {
  title?: string;
};

const PageLayout = ({
  title = "Split",
  children,
}: React.PropsWithChildren<PageLayoutProps>): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container fluid>
          <AppContextProvider>
            <Row>
              <Col xs={2} className={styles.NavigationContainer}>
                <Navigation />
              </Col>
              <Col xs={10} className={styles.ContentContainer}>
                <Container fluid>{children}</Container>
              </Col>
            </Row>
          </AppContextProvider>
        </Container>
      </main>
    </>
  );
};

export default PageLayout;
