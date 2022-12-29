import styled from '@emotion/styled';

const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
`;

function Spinner({ size = 24, color = '#919EAB', loading = true, ...props }) {
  const sizeStyle = {
    width: size,
    height: size,
  };

  return loading ? (
    <Icon>
      <svg viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' style={sizeStyle}>
        <g fill='none' fill-rule='evenodd'>
          <g transform='translate(1 1)' stroke-width='2'>
            <circle stroke-opacity='.2' cx='18' cy='18' r='18' stroke={color} />
            <path d='M36 18c0-9.94-8.06-18-18-18' stroke={color} stroke-width='2'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='1s'
                repeatCount='indefinite'
              />
            </path>
          </g>
        </g>
      </svg>
    </Icon>
  ) : null;
}

export default Spinner;
