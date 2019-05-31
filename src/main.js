import { Age } from './super-galactic-age-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var age = new Age();
$(document).ready(function(){
  console.log(age);
  });
