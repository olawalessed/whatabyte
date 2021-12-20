export default function Overlay({sidebar, showSidebar}) {
    return (
      <div>
        <div
          // Background overlay to wrap content // select to disable side menu on click
          className={
            sidebar
              ? `absolute w-screen min-h-screen z-0 bg-black bg-opacity-70 overflow-hidden`
              : `hidden`
          }
          onClick={showSidebar}
        ></div>
      </div>
    );
}
