"use client";

import React, { useState } from "react";
import "./component.css";
import Image from "next/image";
import HTMLString from "react-html-string";

export default function SejarahCard({
  title,
  description,
  isExpandState = false,
}) {
  const [isExpand, setIsExpand] = useState(isExpandState);

  return (
    <div className="sejarah__card">
      <div
        className="sejarah__card-heading"
        onClick={() => {
          setIsExpand(!isExpand);
        }}
      >
        <p className="sejarah__card-title">{title}</p>
        {isExpand ? (
          <Image
            className="sejarah__card-icon"
            src="/arrow-up-blue.svg"
            width={32}
            height={32}
            alt="arrow-up-blue"
          />
        ) : (
          <Image
            className="sejarah__card-icon"
            src="/arrow-down-blue.svg"
            width={32}
            height={32}
            alt="arrow-down-blue"
          />
        )}
      </div>
      {isExpand && (
        <div className="sejarah__card-content">
          <HTMLString html={description} />
        </div>
      )}
    </div>
  );
}
