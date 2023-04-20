import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Techino YT Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              molestias porro tenetur dolorem nisi commodi deleniti, quisquam
              odit consequatur ipsam voluptate illo quia, quaerat placeat at
              voluptates labore consequuntur exercitationem blanditiis culpa,
              adipisci facilis. Itaque minus reiciendis dignissimos vitae unde
              error eos enim in, nesciunt quis, quibusdam iure hic, laudantium
              debitis eaque iusto cum excepturi labore aperiam impedit atque!
              Error minus eveniet, impedit hic corporis eos minima amet
              accusantium sapiente, velit sit est vel ad illo nam, molestiae
              voluptate. Deserunt, explicabo vitae, fugit voluptatibus earum
              omnis quibusdam aut debitis eligendi commodi enim quo alias. Ut
              non recusandae iure praesentium molestiae.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
