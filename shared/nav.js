/**
 * shared/nav.js
 * Minimal site navigation — exported to window.SiteNav for use on every page.
 * Load AFTER React with <script type="text/babel" src="../shared/nav.js"></script>
 * (adjust the relative path per page depth)
 *
 * Usage in any page's App component:
 *   <SiteNav current="home" />   // "home" | "research"
 */

const SiteNav = ({ current, basePath = '' }) => {
  const links = [
    { id: 'home',     label: 'Home',     href: basePath + '../index.html' },
    { id: 'research', label: 'Research', href: basePath + '../research/index.html' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 24,
    left: 28,
    zIndex: 50,
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  };

  const linkStyle = (id) => ({
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: id === current ? 'var(--text-primary)' : 'var(--text-muted)',
    borderBottom: id === current ? '1px solid var(--accent)' : '1px solid transparent',
    paddingBottom: 1,
    transition: 'color 0.2s, border-color 0.2s',
  });

  const dotStyle = {
    width: 3,
    height: 3,
    borderRadius: '50%',
    background: 'var(--rule)',
  };

  return (
    <nav style={navStyle}>
      {links.map((link, i) => (
        <React.Fragment key={link.id}>
          {i > 0 && <span style={dotStyle} />}
          <a
            href={link.href}
            style={linkStyle(link.id)}
            onMouseEnter={e => {
              if (link.id !== current) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            onMouseLeave={e => {
              if (link.id !== current) e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            {link.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

// Export to window so any page script can use it
Object.assign(window, { SiteNav });
