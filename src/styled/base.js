import styled from '@emotion/styled';

export const Div = styled.div`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: var(--brand-color2);
                            border: 2px solid var(--brand-color4);
                            border-radius: 10px;
                            flex-wrap: wrap;
                            margin: 10px;
                            padding: 5px;
                            min-height: 180px;
                            `
export const H1 = styled.h1`
                           font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                           color: var(--brand-color4);
                           text-align: center;
                           padding: 5px;
                           `
export const Img = styled.img`
                              max-width: 100%;
                              border: 2px solid var(--brand-color4);
                              border-radius: 50%;
                              object-fit: cover;
                              box-shadow: 2px 2px 2px 2px var(--brand-color4);
                               `
export const Article = styled.article`
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    align-items: center;
                                    background-color: var(--brand-color3);
                                    border: 2px solid white;
                                    width: 315px;
                                    height: 190px;
                                    margin-top: 10px;
                                    margin-right: 5px;
                                    border-radius: 10px;
                                     `
export const DivImg = styled.div`
                                  display: flex;
                                  align-items: center;
                                  width: 100px;
                                  height: 100px;
                                  line-height: 0;
                                  margin-top: 5px;
                                  `
export const DivName = styled.div`
                                 display: flex;
                                 justify-content: space-around;

                                 `
export const H4 = styled.h4`
                            color: var(--brand-color4);
                            font-weight: 800;
                            margin: 2px;
                            `
export const H5 = styled.h5`
                            color: var(--brand-color4);
                            margin: 5px;
                            `
export const Button = styled.button`
                                    border: 2px solid var(--brand-color1);
                                    border-radius: 5px;
                                    margin: 0.5rem;
                                    width: 100px;
                                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                                    font-weight: 900;
                                    color: var(--brand-color4);
                                    background-color: var(--brand-color2);
                                    letter-spacing: 1px;
                                    text-transform: uppercase;

                                    :hover{
                                        background-color: var(--brand-color3);
                                    }
                                     `