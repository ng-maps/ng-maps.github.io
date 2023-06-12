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
                    <a href="index.html" data-type="index-link">@ng-maps/here</a>
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
                                <a href="modules/NgMapsHereModule.html" data-type="entity-link" >NgMapsHereModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' : 'data-target="#xs-components-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' :
                                            'id="xs-components-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' }>
                                            <li class="link">
                                                <a href="components/HereComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HereComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' : 'data-target="#xs-directives-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' :
                                        'id="xs-directives-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' }>
                                        <li class="link">
                                            <a href="directives/MarkerClusterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarkerClusterComponent</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' : 'data-target="#xs-injectables-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' :
                                        'id="xs-injectables-links-module-NgMapsHereModule-93168673fa8cf5e24889f704adfea7b16edd074ac734874eeaad5c26ae55c07356afbfaf6f4b7d92e803fc97f0c2d700922078356549946424a82e5e60425e5c"' }>
                                        <li class="link">
                                            <a href="injectables/HereMapsPlatformProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HereMapsPlatformProvider</a>
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
                                    <a href="injectables/ClusterManager.html" data-type="entity-link" >ClusterManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereCircleManager.html" data-type="entity-link" >HereCircleManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereMapsFitBoundsService.html" data-type="entity-link" >HereMapsFitBoundsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereMapsInfoWindowManager.html" data-type="entity-link" >HereMapsInfoWindowManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereMapsLoaderService.html" data-type="entity-link" >HereMapsLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereMapsMarkerManager.html" data-type="entity-link" >HereMapsMarkerManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereMapsWrapperService.html" data-type="entity-link" >HereMapsWrapperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HerePolygonManager.html" data-type="entity-link" >HerePolygonManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HerePolylineManager.html" data-type="entity-link" >HerePolylineManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HereRectangleManager.html" data-type="entity-link" >HereRectangleManager</a>
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
                                <a href="interfaces/ClusterIconInfo.html" data-type="entity-link" >ClusterIconInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HereModuleOptions.html" data-type="entity-link" >HereModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerClusterConfig.html" data-type="entity-link" >MarkerClusterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerClustererOptions.html" data-type="entity-link" >MarkerClustererOptions</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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