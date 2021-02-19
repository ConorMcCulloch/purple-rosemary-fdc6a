import React from 'react';
import _ from 'lodash';

import {classNames, Link, withPrefix, htmlToReact} from '../utils';
import FooterMenu from './FooterMenu';
import Icon from './Icon';

export default class Footer extends React.Component {
    render() {
        let has_logo = false;
        let footer_content = false;
        let footer_social = false;
        if (_.get(this.props, 'pageContext.site.siteMetadata.footer.logo', null)) {
             has_logo = true;
        }
        if ((_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) || _.get(this.props, 'pageContext.site.siteMetadata.footer.links', null))) {
             footer_content = true;
        }
        if ((_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null))) {
             footer_social = true;
        }
        return (
            <React.Fragment>
                <footer className="site-footer">
                	{(footer_content || footer_social) && (
                	<div className="site-footer__info py-3 py-sm-4">
                		<div className="container">
                			<div className="grid items-center">
                				{footer_content && (
                				<div className={classNames('site-footer__copyright', 'cell-12', {'cell-sm': footer_social})}>
                					{_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                						<span>{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                					)}
                					{_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (link, link_idx) => (
                						<Link key={link_idx} to={withPrefix(_.get(link, 'url', null))}
                							{...(_.get(link, 'new_window', null) ? ({target: '_blank'}) : null)}
                							{...((_.get(link, 'new_window', null) || _.get(link, 'no_follow', null)) ? ({rel: (_.get(link, 'new_window', null) ? ('noopener ') : '') + (_.get(link, 'no_follow', null) ? ('nofollow') : '')}) : null)}>{_.get(link, 'label', null)}</Link>
                					))}
                				</div>
                				)}
                				{footer_social && (
                				<div className={classNames('site-footer__social', 'cell-12', {'cell-sm-auto': footer_content})}>
                					{_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (link, link_idx) => {
                					    let link_style = _.get(link, 'style', null) || 'link';
                					    return (
                    						(_.get(link, 'has_icon', null) && _.get(link, 'icon', null)) && (
                    						<Link key={link_idx} to={withPrefix(_.get(link, 'url', null))}
                    							{...(_.get(link, 'new_window', null) ? ({target: '_blank'}) : null)}
                    							{...((_.get(link, 'new_window', null) || _.get(link, 'no_follow', null)) ? ({rel: (_.get(link, 'new_window', null) ? ('noopener ') : '') + (_.get(link, 'no_follow', null) ? ('nofollow') : '')}) : null)}
                    							className={classNames('btn', 'btn--icon', {'btn--primary': link_style === 'primary', 'btn--secondary': link_style === 'secondary', 'btn--clear': link_style === 'link'})}>
                    							<Icon {...this.props} icon={_.get(link, 'icon', null)} />
                    							<span className="sr-only">{_.get(link, 'label', null)}</span>
                    						</Link>
                    						)
                    					)
                					})}
                				</div>
                				)}
                			</div>
                		</div>
                	</div>
                	)}
                </footer>
            </React.Fragment>
        );
    }
}
