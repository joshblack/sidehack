import from 'core-js';

export const base = {
  'background': '#ffffff',
  'border': '1px solid #D9D9DE',
  'width': '100%',
  'height': 75
};

export const listStyle = {
  'display': 'flex',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  'width': '85%',
  'height': '100%',
  'margin': 'auto',
  'padding': 0
};

export const listItemStyle = {
  'display': 'inline-block',
  'height': '100%'
};

export const linkStyle = {
  'fontFamily': 'DroidSans',
  'fontWeight': 'normal',
  'fontSize': 16,
  'color': '#AFAFAF',
  'textDecoration': 'none'
};

export const logoItemStyle = Object.assign({}, listItemStyle, {
  'display': 'flex',
  'alignItems': 'center',
  'marginLeft': 65,
  'flexGrow': 1
});

export const linkItemStyle = Object.assign({}, listItemStyle, {
  'display': 'flex',
  'alignItems': 'center',
  'flexGrow': 1
});

export const searchItemStyle = Object.assign({}, listItemStyle, {
  'flexGrow': 3,
  'marginRight': 25
});

export const avatarItemStyle = Object.assign({}, listItemStyle, {
  'flexGrow': 0
});
