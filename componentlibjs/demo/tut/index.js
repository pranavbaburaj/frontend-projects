import {Component, Template} from "../../src/index.js"

var t = '<h1>Hello World</h1>'

var c = new Component(".root")

c.registerComponent(t)
c.registerComponent(t)