import styled from '@emotion/styled';

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Supper = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 20px;
  color: white;
  background-color: #f44;
  transform: translate(50%, -50%);

  &.dot {
    padding: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

function Badge({
  children,
  count,
  maxCount,
  dot = false,
  backgroundColor,
  textColor,
  showZero,
  ...props
}) {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;

  if (count) {
    badge = (
      <Supper style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </Supper>
    );
  } else {
    if (count !== undefined) {
      badge = showZero ? null : <Supper style={colorStyle}>0</Supper>;
    } else if (dot) {
      badge = <Supper className='dot' style={colorStyle}></Supper>;
    }
  }

  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  );
}

export default Badge;
