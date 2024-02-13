import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{
                border: "1px solid blue",
                padding: "4px",
                backgroundColor: "blue"
            }}
        >
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header!</h1>
            <body>Hello World!</body>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                                marginBottom: "10px" // Optional, for spacing between the rectangle and the button
                            }}
                        ></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                                marginBottom: "10px" // Optional, for spacing between the rectangle and the image
                            }}
                        ></div>
                        <img
                            src="https://th-thumbnailer.cdn-si-edu.com/4Nq8HbTKgX6djk07DqHqRsRuFq0=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg"
                            alt="A picture of a banana"
                            style={{ maxWidth: "100px", height: "auto" }}
                        />
                        <ol>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
