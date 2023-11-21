import styled from "styled-components";

function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <footer className="footer">
                    <h2 className="footer_title">Mobile Legends Hero App</h2>
                    <p className="footer_author">Created by IlmanFais</p>
                </footer>
            </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.div`
  /* Small Screen */
  .container {
    background-color: #000000;
    color: aquamarine;
    padding: 1rem;
    text-align: center;
  }

  .footer_title {
    margin-bottom: 1em;
  }

  .footer author {
    margin-bottom: 1em;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
    * Nothing TODO here.
    * We dont change styling footer.
    */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /*
    * Nothing TODO here.
    * We dont change styling footer.
    */
  }
`;

export default Footer;
