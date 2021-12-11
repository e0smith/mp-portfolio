import { Container, NameMark } from "../Container.style"
import { SubBodyForm, TextArea, InputText, SubmitButton, FormBox } from "../Container.style"
export default function About(){

    return(
        <Container>
            <NameMark>Megan Proctor</NameMark>
            <FormBox>
                <header> Inquiry </header>
                <SubBodyForm>
                    <h2>Inquiry</h2>
                    <div className="info-box">
                        <div>
                            <p>Please fill out the following "Inquiry form" with necessary information and inquiry or comments, and press "submit".</p>
                        </div>
                        <div className="inquiry-form">
                            <form method="post">
                                <table width="100%" summary="Inquiry form">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="form">
                                                Company name, Gallery name
                                            </th>
                                                <InputText type="text" name="company"/>
                                                <input type="hidden" name="company" value="company"/>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="form" >
                                                Name
                                            </th>
                                                <InputText type="text" name="name"/>
                                                <input type="hidden" name="name" value="name"/>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="form" >
                                                E-mail
                                            </th>
                                                <InputText type="text" name="email"/>
                                                <input type="hidden" name="email" value="email"/>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="form" >
                                                Message
                                            </th>
                                                <TextArea rows="10" name="text"></TextArea>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="form-btn-box">
                                    <div className="form-btn-submit">
                                        <SubmitButton type="submit" value="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </SubBodyForm>
            </FormBox>
        </Container>
    )
}