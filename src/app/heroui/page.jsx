"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
function HeroUiTest() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      {isVisible && <p>Button clicked</p>}
      <Button
        color="secondary"
        onPress={() => {
          setVisible(!isVisible);
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default HeroUiTest;
