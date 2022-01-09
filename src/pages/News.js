import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllNews } from "../redux/thunk/newsThunk";

const News = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  const { newsList } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <Container>
      <Row className="mx-5 d-flex justify-content-center">
        {newsList.map((news) => (
          <Col
            className="d-flex mb-3 mt-3 justify-content-center align-items-center"
            xs={12}
            md={4}
            lg={3}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  news?.image?.thumbnail?.contentUrl ??
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
                }
              />
              <Card.Body>
                <Card.Text>
                  {news?.name ?? "Tesla disables gaming while driving"}
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
