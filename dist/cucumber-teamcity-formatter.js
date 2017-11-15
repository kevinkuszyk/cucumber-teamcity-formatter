!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TeamCityFormatter=t():e.TeamCityFormatter=t()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));class a extends s.Formatter{constructor(e){super(Object.assign(e,{colorFns:(0,r.default)(!1)})),e.eventBroadcaster.on("test-case-started",this.logTestCaseStarted.bind(this)).on("test-case-finished",this.logTestCaseFinished.bind(this))}getCaseIndexInfo({sourceLocation:e,gherkinDocument:t}){return{totalCases:t.feature.children.length,caseIndex:t.feature.children.findIndex(t=>t.location.line===e.line)}}logTestCaseStarted({sourceLocation:e}){const{gherkinDocument:t,pickle:n}=this.eventDataCollector.getTestCaseData(e),{caseIndex:s}=this.getCaseIndexInfo({sourceLocation:e,gherkinDocument:t});0===s&&this.log(`##teamcity[testSuiteStarted name='${this.escape(t.feature.name)}']\n`),this.log(`##teamcity[testStarted name='${this.escape(n.name)}' captureStandardOutput='true']\n`)}logTestCaseFinished({sourceLocation:e}){const{gherkinDocument:t,pickle:n,testCase:r,testCase:{result:{status:a,duration:o}}}=this.eventDataCollector.getTestCaseData(e);if(a===s.Status.AMBIGUOUS||a===s.Status.FAILED){const e=s.formatterHelpers.formatIssue({colorFns:this.colorFns,gherkinDocument:t,number:1,pickle:n,snippetBuilder:this.snippetBuilder,testCase:r});this.log(`##teamcity[testFailed name='${this.escape(n.name)}' message='${this.escape(`${n.name} FAILED`)}' details='${this.escape(e)}']\n`)}this.log(`##teamcity[testFinished name='${this.escape(n.name)}' duration='${o}']\n`);const{totalCases:i,caseIndex:c}=this.getCaseIndexInfo({sourceLocation:e,gherkinDocument:t});c===i-1&&this.log(`##teamcity[testSuiteFinished name='${this.escape(t.feature.name)}']\n`)}escape(e){return e.replace(/\|/g,"||").replace(/'/g,"|'").replace(/\n/g,"|n").replace(/\r/g,"|r").replace(/\[/g,"|[").replace(/\]/g,"|]")}}t.default=a},function(e,t){e.exports=require("cucumber")},function(e,t){e.exports=require("cucumber/lib/formatter/get_color_fns")}])});
//# sourceMappingURL=cucumber-teamcity-formatter.js.map