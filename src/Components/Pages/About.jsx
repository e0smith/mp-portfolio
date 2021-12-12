import { Container, NameMark, InfoBox, InfoHeader } from "../Container.style"

export default function About(){

    return(
        <Container>
            <NameMark>Megan Proctor</NameMark>
            <InfoBox>
                <article className="sub-body">
                    <InfoHeader><strong>About</strong></InfoHeader>
                    <div>
                        <h2>Information</h2>
                        <div className="info-box">
                            <div>
                                <h3>Name</h3>
                                <p>Megan Proctor</p>
                            </div>
                            <div>
                                <h3>School</h3>
                                <p> Pratt Institute, Brooklyn, New York</p>
                            </div>
                        </div>
                    </div>
                </article>
            </InfoBox>
        </Container>
    )
}
