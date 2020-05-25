import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'back': {
    'backgroundColor': '#e3e2e8'
  },
  'wall': {
    'backgroundColor': 'white',
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }],
    'marginTop': [{ 'unit': '%V', 'value': 0.05 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.025 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.95 }]
  },
  'header': {
    'backgroundColor': '#4082f4',
    'maxWidth': [{ 'unit': '%H', 'value': 0.95 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.025 }],
    'padding': [{ 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.01 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.01 }],
    'borderRadius': '5px 5px 0 0',
    'marginBottom': [{ 'unit': '%V', 'value': 0.02 }]
  },
  'heading': {
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'progress': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.975 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.012 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.03 }]
  },
  'steps': {
    'marginBottom': [{ 'unit': '%V', 'value': 0.02 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.05 }]
  },
  'badge': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }]
  },
  '#circle': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '50%',
    'backgroundColor': '#e3e2e8',
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'textAlign': 'center',
    'marginLeft': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'details': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.015 }],
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.03 }]
  },
  'form': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.15 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.1 }]
  },
  'input[type="email"]': {
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.05 }]
  },
  'input[type="password"]': {
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.05 }]
  }
})