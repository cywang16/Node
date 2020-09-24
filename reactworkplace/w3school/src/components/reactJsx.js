import React from 'react'

var title = <h2>React JSX</h2>

const myListElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)

const groupedH1 = (
  <div>
    <h3>I am a Header.</h3>
    <h3>I am a Header too.</h3>
  </div>
)

function GetMyListElement() {
    return (
        <div>{myListElement}</div>
    )
}

function GetGroupedH1() {
    return {groupedH1}
}

export default function ReactJsx() {
    return (
        <div>
        {title}
            <GetMyListElement />
            <GetGroupedH1 />
        </div>
    )
}