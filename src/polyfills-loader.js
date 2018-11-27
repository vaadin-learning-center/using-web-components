if (!('customElements' in window)) {
  import('@webcomponents/webcomponentsjs/bundles/webcomponents-ce');
}
if (!('attachShadow' in document.head)) {
  import('@webcomponents/webcomponentsjs/bundles/webcomponents-sd');
}
