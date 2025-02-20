import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { defaultTheme } from "./styles/themes/default"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="success"/>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="danger"/>
    </ ThemeProvider >
    
  )
}