'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@ng-maps/google</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgMapsGoogleModule.html" data-type="entity-link" >NgMapsGoogleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgMapsGoogleModule-a5f66bfcf75983c546e1e852cc81d694d427a7408111d1bebe5a3a3e9426df41fa4ee3ba5a5be6384ceb078b527571620dad93e8f6cb9a9e8e92780008a845de"' : 'data-target="#xs-components-links-module-NgMapsGoogleModule-a5f66bfcf75983c546e1e852cc81d694d427a7408111d1bebe5a3a3e9426df41fa4ee3ba5a5be6384ceb078b527571620dad93e8f6cb9a9e8e92780008a845de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgMapsGoogleModule-a5f66bfcf75983c546e1e852cc81d694d427a7408111d1bebe5a3a3e9426df41fa4ee3ba5a5be6384ceb078b527571620dad93e8f6cb9a9e8e92780008a845de"' :
                                            'id="xs-components-links-module-NgMapsGoogleModule-a5f66bfcf75983c546e1e852cc81d694d427a7408111d1bebe5a3a3e9426df41fa4ee3ba5a5be6384ceb078b527571620dad93e8f6cb9a9e8e92780008a845de"' }>
                                            <li class="link">
                                                <a href="components/GoogleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GoogleCircleManager.html" data-type="entity-link" >GoogleCircleManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleInfoWindowManager.html" data-type="entity-link" >GoogleInfoWindowManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleMapsAPIWrapper.html" data-type="entity-link" >GoogleMapsAPIWrapper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleMapsFitBoundsService.html" data-type="entity-link" >GoogleMapsFitBoundsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleMapsMarkerManager.html" data-type="entity-link" >GoogleMapsMarkerManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleMapsScriptLoader.html" data-type="entity-link" >GoogleMapsScriptLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GooglePolygonManager.html" data-type="entity-link" >GooglePolygonManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GooglePolylineManager.html" data-type="entity-link" >GooglePolylineManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleRectangleManager.html" data-type="entity-link" >GoogleRectangleManager</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/GoogleModuleOptions.html" data-type="entity-link" >GoogleModuleOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});