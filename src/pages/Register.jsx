import { useContext } from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "20%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>S'enrégistrer</h2>

              <Form.Control
                type="text"
                placeholder="Nom"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
                value={registerInfo.name}
              />
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
                value={registerInfo.email}
              />
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
                value={registerInfo.password}
              />
              <Button
                variant="primary"
                type="submit"
                disabled={isRegisterLoading}
              >
                {isRegisterLoading ? "Création de votre compte..." : "Enrégister"}
              </Button>

              {registerError?.error && (
                <Alert variant="danger">
                  <b>{`Error status code: ${registerError?.status}`}</b>
                  <p>{registerError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
