import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Button from "./components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [shadow, setShadow] = useState("base disableShadow");

  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-button">
        <Button
          classes="base classic"
          name="<Button />"
          title="Default"
          clickHandler={() => {
            alert("Default Button");
          }}
        />
        <Button
          classes="base hover1"
          textColor="hover-text"
          name="&:hover, &:focus"
          title="Default"
          clickHandler={() => {
            alert("Hover Button");
          }}
        />
        <Button
          classes="base outline"
          name="<Button variant=”outline” />"
          title="Default"
        />
        <Button
          classes="base hover2"
          textColor="hover-text"
          name="&:hover, &:focus"
          title="Default"
        />
        <Button
          classes="base text"
          name="<Button variant=”text” />"
          title="Default"
          clickHandler={() => {
            alert("Only Text Button");
          }}
        />

        <Button classes="base hover4" name="&:hover, &:focus" title="Default" />
        <Button
          classes="base text"
          name="<Button variant=”text” />"
          title="Default"
          clickHandler={() => {
            alert("Only Text Button");
          }}
        />
        <Button
          classes={shadow}
          name="<Button disableShadow />"
          title="Default"
          clickHandler={() => {
            alert("Disable Shadow Button");
            setShadow("base disableShadow removeShadow");
          }}
        />
        <Button
          classes="base disabled"
          name="<Button disabled />"
          title="Default"
        />
        <Button
          classes="base text-disabled"
          name='<Button "text"disabled />'
          title="Default"
        />
        <Button
          classes="base grocery-store-start"
          name="<Button startIcon=”local_grocery_store” />"
          title=" Default"
          iconStart={<AiOutlineShoppingCart />}
        />
        <Button
          classes="base grocery-store-end"
          name="<Button endIcon=”local_grocery_store” />"
          title="Default "
          iconEnd={<AiOutlineShoppingCart />}
        />
        <Button
          classes="base sm-btn"
          name="<Button size=”sm” />"
          title="Default "
        />
        <Button
          classes="base md-btn"
          name="<Button size=”md” />"
          title="Default "
        />
        <Button
          classes="base lg-btn"
          name="<Button size=”lg” />"
          title="Default "
        />
        <Button
          classes="base danger"
          name="<Button color=”danger” />"
          title="Default "
          clickHandler={() => {
            alert('"I am the Danger"');
          }}
        />
        <Button classes="base danger-no-text" name="" title="Default " />
        <div className="username">
          <p>
            created by{" "}
            <a href="https://www.instagram.com/tonsofcode">tonsofcode</a> -
            devChallenges.io
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
